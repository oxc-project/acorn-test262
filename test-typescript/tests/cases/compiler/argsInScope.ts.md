__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 202,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 169,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 169,
                "body": [
                  {
                    "type": "ForStatement",
                    "start": 56,
                    "end": 163,
                    "body": {
                      "type": "BlockStatement",
                      "start": 99,
                      "end": 163,
                      "body": []
                    },
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 61,
                      "end": 70,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 65,
                          "end": 70,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 69,
                            "end": 70,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 72,
                      "end": 92,
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 76,
                        "end": 92,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 85,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 92,
                          "decorators": [],
                          "name": "length",
                          "optional": false
                        }
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 94,
                      "end": 97,
                      "argument": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "i",
                        "optional": false
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 16,
                  "end": 25,
                  "decorators": [],
                  "name": "ii",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 18,
                    "end": 25,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 19,
                      "end": 25
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 27,
                  "end": 35,
                  "decorators": [],
                  "name": "j",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 45,
                  "decorators": [],
                  "name": "k",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 39,
                      "end": 45
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 181,
            "end": 188,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 190,
        "end": 200,
        "arguments": [
          {
            "type": "Literal",
            "start": 194,
            "end": 195,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 196,
            "end": 197,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 198,
            "end": 199,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 190,
          "end": 193,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 190,
            "end": 191,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "decorators": [],
            "name": "P",
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
