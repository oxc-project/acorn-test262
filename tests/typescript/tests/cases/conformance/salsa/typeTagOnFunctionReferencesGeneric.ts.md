__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 60,
  "end": 242,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 60,
      "end": 101,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 67,
        "end": 101,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 84,
          "end": 101,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 90,
              "end": 99,
              "argument": {
                "type": "Identifier",
                "start": 97,
                "end": 98,
                "decorators": [],
                "name": "l",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 76,
          "end": 80,
          "decorators": [],
          "name": "inJs",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 110,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 102,
        "end": 109,
        "arguments": [
          {
            "type": "Literal",
            "start": 107,
            "end": 108,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 102,
          "end": 106,
          "decorators": [],
          "name": "inJs",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 165,
            "decorators": [],
            "name": "inJsArrow",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 168,
            "end": 192,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 175,
              "end": 192,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 181,
                  "end": 190,
                  "argument": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 189,
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 206,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 193,
        "end": 205,
        "arguments": [
          {
            "type": "Literal",
            "start": 203,
            "end": 204,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 193,
          "end": 202,
          "decorators": [],
          "name": "inJsArrow",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
