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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 169,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "P",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 15,
              "end": 169,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 16,
                  "end": 25,
                  "name": "ii",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 18,
                    "end": 25,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 19,
                      "end": 25
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 27,
                  "end": 35,
                  "name": "j",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 29,
                      "end": 35
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 37,
                  "end": 45,
                  "name": "k",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 39,
                      "end": 45
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 65,
                          "end": 70,
                          "id": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "name": "i",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "kind": "var",
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
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                          "name": "arguments",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 92,
                          "name": "length",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
                        "name": "i",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 181,
            "end": 188,
            "callee": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
