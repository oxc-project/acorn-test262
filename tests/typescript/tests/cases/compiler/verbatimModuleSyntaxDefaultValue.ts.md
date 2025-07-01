__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Task",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 11,
        "end": 13
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "task",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 28
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Task",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 36
          },
          "typeArguments": null,
          "start": 32,
          "end": 36
        },
        "start": 30,
        "end": 36
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Task",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 54
              },
              "typeArguments": null,
              "arguments": [],
              "start": 46,
              "end": 56
            },
            "start": 39,
            "end": 57
          }
        ],
        "start": 37,
        "end": 59
      },
      "expression": false,
      "start": 15,
      "end": 59
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "build",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 79
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "task",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 86
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 82,
              "end": 88
            },
            "definite": false,
            "start": 74,
            "end": 88
          }
        ],
        "declare": false,
        "start": 68,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 61,
      "end": 89
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "build",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 110
      },
      "exportKind": "value",
      "start": 90,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 111
}
```
