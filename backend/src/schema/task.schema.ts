import {
  object, string, number, boolean, TypeOf,
} from 'zod';

const payload = {
  body: object({
    title: string({
      required_error: "Title is required",
    }),
    description: string({
      required_error: "Description is required",
    }), //.min(120, "Description should be at least 120 characters long!"),
    isActive: boolean({
      required_error: "isActive flag is required",
    }),
    label: string({
      required_error: "Label is required",
    }),
    urgency: number({
      required_error: "Urgency is required",
    }),
  }),
};

const params = {
  params: object({
    taskId: string({
      required_error: "Task Id is required",
    }),
  }),
};

export const createTaskSchema = object({
  ...payload,
});

export const findTaskSchema = object({
  ...params,
});

export const updateTaskSchema = object({
  ...payload,
  ...params,
});

export type CreateTaskInput = TypeOf<typeof createTaskSchema>
export type FindTaskInput = TypeOf<typeof findTaskSchema>
export type UpdateTaskInput = TypeOf<typeof updateTaskSchema>