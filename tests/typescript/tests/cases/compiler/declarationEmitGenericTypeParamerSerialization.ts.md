__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 110,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 110,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 34,
            "end": 108,
            "argument": {
              "type": "ObjectExpression",
              "start": 41,
              "end": 108,
              "properties": [
                {
                  "type": "Property",
                  "start": 49,
                  "end": 70,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 50,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 50,
                    "end": 70,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 53,
                      "end": 70,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 55,
                          "end": 68,
                          "argument": {
                            "type": "Identifier",
                            "start": 62,
                            "end": 67,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "Property",
                  "start": 78,
                  "end": 103,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 83,
                    "end": 103,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 86,
                      "end": 103,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 88,
                          "end": 101,
                          "argument": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 100,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "wrapper",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 28,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 25,
            "end": 28,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 27,
              "end": 28,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 19,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 112,
      "end": 139,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 119,
        "end": 139,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 125,
            "end": 139,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 129,
              "end": 139,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 137,
                  "end": 138,
                  "raw": "0",
                  "value": 0
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 129,
                "end": 136,
                "decorators": [],
                "name": "wrapper",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
