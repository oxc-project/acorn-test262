__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 139,
  "end": 334,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 243,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 242,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 148,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 151,
            "end": 242,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 158,
              "end": 242,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 164,
                  "end": 218,
                  "alternate": null,
                  "consequent": {
                    "type": "ThrowStatement",
                    "start": 200,
                    "end": 218,
                    "argument": {
                      "type": "CallExpression",
                      "start": 206,
                      "end": 217,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 206,
                        "end": 215,
                        "decorators": [],
                        "name": "TypeError",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 187,
                    "end": 198,
                    "operator": "!==",
                    "left": {
                      "type": "MemberExpression",
                      "start": 187,
                      "end": 192,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 189,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 192,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 197,
                      "end": 198,
                      "raw": "0",
                      "value": 0
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 223,
                  "end": 240,
                  "argument": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 239,
                    "decorators": [],
                    "name": "undefined",
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
                "start": 152,
                "end": 153,
                "decorators": [],
                "name": "a",
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
      "type": "ExportNamedDeclaration",
      "start": 245,
      "end": 334,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 252,
        "end": 334,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 258,
            "end": 333,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 258,
              "end": 262,
              "decorators": [],
              "name": "main",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 265,
              "end": 333,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 271,
                "end": 333,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 300,
                    "end": 319,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 306,
                        "end": 318,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 306,
                          "end": 307,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 310,
                          "end": 318,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 312,
                              "end": 316,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 312,
                                "end": 313,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 315,
                                "end": 316,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 324,
                    "end": 331,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 324,
                      "end": 330,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 328,
                          "end": 329,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 324,
                        "end": 327,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
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
