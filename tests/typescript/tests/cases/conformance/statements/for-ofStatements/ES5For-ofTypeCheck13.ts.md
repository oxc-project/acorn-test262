__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strSet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 17
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 18,
                      "end": 24
                    }
                  ],
                  "start": 17,
                  "end": 25
                },
                "start": 14,
                "end": 25
              },
              "start": 12,
              "end": 25
            },
            "start": 6,
            "end": 25
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
            },
            "typeArguments": null,
            "arguments": [],
            "start": 28,
            "end": 37
          },
          "definite": false,
          "start": 6,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 44
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 48
          },
          "optional": false,
          "computed": false,
          "start": 38,
          "end": 48
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Hello",
            "raw": "'Hello'",
            "start": 49,
            "end": 56
          }
        ],
        "optional": false,
        "start": 38,
        "end": 57
      },
      "directive": null,
      "start": 38,
      "end": 57
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 64
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "optional": false,
          "computed": false,
          "start": 58,
          "end": 68
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "World",
            "raw": "'World'",
            "start": 69,
            "end": 76
          }
        ],
        "optional": false,
        "start": 58,
        "end": 77
      },
      "directive": null,
      "start": 58,
      "end": 77
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 92
            },
            "init": null,
            "definite": false,
            "start": 89,
            "end": 92
          }
        ],
        "declare": false,
        "start": 83,
        "end": 92
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "strSet",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 102
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 104,
        "end": 107
      },
      "start": 78,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
