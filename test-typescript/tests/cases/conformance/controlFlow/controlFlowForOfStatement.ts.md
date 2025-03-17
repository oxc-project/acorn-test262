__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 179,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 17,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 9,
                "end": 17,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 9,
                  "end": 15
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 60,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 60,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 26,
                "end": 60,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 35,
                    "end": 41
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 44,
                    "end": 51
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 54,
                    "end": 60,
                    "typeName": {
                      "type": "Identifier",
                      "start": 54,
                      "end": 60,
                      "name": "RegExp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 63,
      "end": 178,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 73,
        "name": "a",
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
        "start": 76,
        "end": 178,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 82,
            "end": 91,
            "expression": {
              "type": "AssignmentExpression",
              "start": 82,
              "end": 90,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 86,
                "end": 90,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          },
          {
            "type": "ForOfStatement",
            "start": 96,
            "end": 149,
            "await": false,
            "left": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "name": "obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 111,
              "end": 149,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 121,
                  "end": 143,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 121,
                    "end": 142,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 122,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 125,
                      "end": 142,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 125,
                        "end": 140,
                        "object": {
                          "type": "Identifier",
                          "start": 125,
                          "end": 126,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 140,
                          "name": "toExponential",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 154,
            "end": 156,
            "expression": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
