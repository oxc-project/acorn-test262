__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Task",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 13,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 15,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 28,
        "name": "task",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 37,
        "end": 59,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 39,
            "end": 57,
            "argument": {
              "type": "NewExpression",
              "start": 46,
              "end": 56,
              "callee": {
                "type": "Identifier",
                "start": 50,
                "end": 54,
                "name": "Task",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 30,
        "end": 36,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 32,
          "end": 36,
          "typeName": {
            "type": "Identifier",
            "start": 32,
            "end": 36,
            "name": "Task",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 89,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 68,
        "end": 89,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 74,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 79,
              "name": "build",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 82,
              "end": 88,
              "callee": {
                "type": "Identifier",
                "start": 82,
                "end": 86,
                "name": "task",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 90,
      "end": 111,
      "declaration": {
        "type": "Identifier",
        "start": 105,
        "end": 110,
        "name": "build",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
