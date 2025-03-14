__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 72,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 72,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 70,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 22,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 70,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 53,
                    "end": 64,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 60,
                      "end": 63,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 61,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 62,
                        "end": 63,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 41,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 34,
                    "end": 41,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 35,
                      "end": 41
                    }
                  }
                }
              ]
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 78,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 82,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 91,
      "expression": {
        "type": "CallExpression",
        "start": 84,
        "end": 90,
        "arguments": [
          {
            "type": "Literal",
            "start": 88,
            "end": 89,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 84,
          "end": 87,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 84,
            "end": 85,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
