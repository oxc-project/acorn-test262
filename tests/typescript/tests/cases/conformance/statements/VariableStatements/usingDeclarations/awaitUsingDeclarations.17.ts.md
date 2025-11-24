__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "random",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 19
          },
          "optional": false,
          "computed": false,
          "start": 8,
          "end": 19
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 8,
        "end": 21
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 34,
            "end": 35
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d20",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 60
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Symbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 72,
                            "end": 78
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asyncDispose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 79,
                            "end": 91
                          },
                          "optional": false,
                          "computed": false,
                          "start": 72,
                          "end": 91
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": true,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 95,
                            "end": 97
                          },
                          "expression": false,
                          "start": 92,
                          "end": 97
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 65,
                        "end": 97
                      }
                    ],
                    "start": 63,
                    "end": 99
                  },
                  "definite": false,
                  "start": 57,
                  "end": 99
                }
              ],
              "declare": false,
              "start": 45,
              "end": 100
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 109,
              "end": 115
            }
          ],
          "start": 29,
          "end": 115
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 126,
            "end": 127
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d21",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 149,
                    "end": 152
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Symbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 164,
                            "end": 170
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asyncDispose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 171,
                            "end": 183
                          },
                          "optional": false,
                          "computed": false,
                          "start": 164,
                          "end": 183
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": true,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 187,
                            "end": 189
                          },
                          "expression": false,
                          "start": 184,
                          "end": 189
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 157,
                        "end": 189
                      }
                    ],
                    "start": 155,
                    "end": 191
                  },
                  "definite": false,
                  "start": 149,
                  "end": 191
                }
              ],
              "declare": false,
              "start": 137,
              "end": 192
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 201,
              "end": 207
            }
          ],
          "start": 121,
          "end": 207
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d22",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 245
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Symbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 257,
                            "end": 263
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "asyncDispose",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 264,
                            "end": 276
                          },
                          "optional": false,
                          "computed": false,
                          "start": 257,
                          "end": 276
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": true,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 280,
                            "end": 282
                          },
                          "expression": false,
                          "start": 277,
                          "end": 282
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 250,
                        "end": 282
                      }
                    ],
                    "start": 248,
                    "end": 284
                  },
                  "definite": false,
                  "start": 242,
                  "end": 284
                }
              ],
              "declare": false,
              "start": 230,
              "end": 285
            }
          ],
          "start": 213,
          "end": 285
        }
      ],
      "start": 0,
      "end": 287
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 293,
        "end": 297
      },
      "consequent": {
        "type": "SwitchStatement",
        "discriminant": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 311,
          "end": 312
        },
        "cases": [
          {
            "type": "SwitchCase",
            "test": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 329,
              "end": 330
            },
            "consequent": [
              {
                "type": "VariableDeclaration",
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d23",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 359
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 371,
                              "end": 377
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 378,
                              "end": 390
                            },
                            "optional": false,
                            "computed": false,
                            "start": 371,
                            "end": 390
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 394,
                              "end": 396
                            },
                            "expression": false,
                            "start": 391,
                            "end": 396
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 364,
                          "end": 396
                        }
                      ],
                      "start": 362,
                      "end": 398
                    },
                    "definite": false,
                    "start": 356,
                    "end": 398
                  }
                ],
                "declare": false,
                "start": 344,
                "end": 399
              },
              {
                "type": "BreakStatement",
                "label": null,
                "start": 412,
                "end": 418
              }
            ],
            "start": 324,
            "end": 418
          },
          {
            "type": "SwitchCase",
            "test": null,
            "consequent": [
              {
                "type": "VariableDeclaration",
                "kind": "await using",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d24",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 461,
                      "end": 464
                    },
                    "init": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Symbol",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 476,
                              "end": 482
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "asyncDispose",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 483,
                              "end": 495
                            },
                            "optional": false,
                            "computed": false,
                            "start": 476,
                            "end": 495
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": true,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 499,
                              "end": 501
                            },
                            "expression": false,
                            "start": 496,
                            "end": 501
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": true,
                          "optional": false,
                          "start": 469,
                          "end": 501
                        }
                      ],
                      "start": 467,
                      "end": 503
                    },
                    "definite": false,
                    "start": 461,
                    "end": 503
                  }
                ],
                "declare": false,
                "start": 449,
                "end": 504
              }
            ],
            "start": 428,
            "end": 504
          }
        ],
        "start": 303,
        "end": 510
      },
      "alternate": null,
      "start": 289,
      "end": 510
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 512,
      "end": 522
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 522
}
```
