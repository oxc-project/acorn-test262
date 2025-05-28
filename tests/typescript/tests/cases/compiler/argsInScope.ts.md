__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 201,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 171,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 169,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 169,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 169,
                "body": [
                  {
                    "type": "ForStatement",
                    "start": 56,
                    "end": 163,
                    "init": {
                      "type": "VariableDeclaration",
                      "start": 61,
                      "end": 70,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 65,
                          "end": 70,
                          "id": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 69,
                            "end": 70,
                            "value": 0,
                            "raw": "0"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 72,
                      "end": 92,
                      "left": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "<",
                      "right": {
                        "type": "MemberExpression",
                        "start": 76,
                        "end": 92,
                        "object": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 85,
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 92,
                          "decorators": [],
                          "name": "length",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 94,
                      "end": 97,
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 94,
                        "end": 95,
                        "decorators": [],
                        "name": "i",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 99,
                      "end": 163,
                      "body": []
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 189,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 181,
            "end": 188,
            "callee": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 190,
        "end": 200,
        "callee": {
          "type": "MemberExpression",
          "start": 190,
          "end": 193,
          "object": {
            "type": "Identifier",
            "start": 190,
            "end": 191,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 194,
            "end": 195,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 196,
            "end": 197,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 198,
            "end": 199,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
