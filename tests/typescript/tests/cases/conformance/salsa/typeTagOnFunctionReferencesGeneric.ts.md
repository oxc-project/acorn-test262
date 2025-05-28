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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 67,
        "end": 101,
        "id": {
          "type": "Identifier",
          "start": 76,
          "end": 80,
          "decorators": [],
          "name": "inJs",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 110,
      "expression": {
        "type": "CallExpression",
        "start": 102,
        "end": 109,
        "callee": {
          "type": "Identifier",
          "start": 102,
          "end": 106,
          "decorators": [],
          "name": "inJs",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 107,
            "end": 108,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 192,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 192,
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
            "expression": false,
            "async": false,
            "typeParameters": null,
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
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 193,
      "end": 206,
      "expression": {
        "type": "CallExpression",
        "start": 193,
        "end": 205,
        "callee": {
          "type": "Identifier",
          "start": 193,
          "end": 202,
          "decorators": [],
          "name": "inJsArrow",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 203,
            "end": 204,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
