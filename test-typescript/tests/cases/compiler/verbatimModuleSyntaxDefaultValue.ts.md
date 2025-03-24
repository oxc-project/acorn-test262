__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 111,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 13,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Task",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 15,
      "end": 59,
      "async": false,
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
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 50,
                "end": 54,
                "decorators": [],
                "name": "Task",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 28,
        "decorators": [],
        "name": "task",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 30,
        "end": 36,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 32,
          "end": 36,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 32,
            "end": 36,
            "decorators": [],
            "name": "Task",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 89,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 68,
        "end": 89,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 74,
            "end": 88,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 74,
              "end": 79,
              "decorators": [],
              "name": "build",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 82,
              "end": 88,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 82,
                "end": 86,
                "decorators": [],
                "name": "task",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 90,
      "end": 111,
      "declaration": {
        "type": "Identifier",
        "start": 105,
        "end": 110,
        "decorators": [],
        "name": "build",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
