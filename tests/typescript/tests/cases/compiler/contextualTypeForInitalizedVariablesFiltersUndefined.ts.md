__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fInferred",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 15
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 21,
                        "end": 22
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 21,
                          "end": 22
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 25,
                          "end": 26
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 21,
                        "end": 26
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 21,
                      "end": 26
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 28
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 31,
                  "end": 33
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 33
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "id": null,
            "generator": false,
            "start": 18,
            "end": 39
          },
          "definite": false,
          "start": 6,
          "end": 39
        }
      ],
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fAnnotated",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fInferred",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 132
                },
                "typeArguments": null,
                "start": 116,
                "end": 132
              },
              "start": 114,
              "end": 132
            },
            "start": 104,
            "end": 132
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 138,
                        "end": 139
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 139
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 142,
                          "end": 143
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 138,
                        "end": 143
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 138,
                      "end": 143
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 145
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 148,
                  "end": 150
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 150
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "id": null,
            "generator": false,
            "start": 135,
            "end": 156
          },
          "definite": false,
          "start": 104,
          "end": 156
        }
      ],
      "declare": false,
      "start": 98,
      "end": 157
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 176,
                          "end": 177
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 179,
                            "end": 185
                          },
                          "start": 177,
                          "end": 185
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 176,
                        "end": 185
                      }
                    ],
                    "start": 174,
                    "end": 187
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 190,
                    "end": 199
                  }
                ],
                "start": 174,
                "end": 199
              },
              "start": 172,
              "end": 199
            },
            "start": 171,
            "end": 199
          },
          "init": null,
          "definite": false,
          "start": 171,
          "end": 199
        }
      ],
      "declare": true,
      "start": 159,
      "end": 200
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 210
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 210
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 209,
                "end": 210
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 212
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 215,
            "end": 216
          },
          "definite": false,
          "start": 207,
          "end": 216
        }
      ],
      "declare": false,
      "start": 201,
      "end": 217
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fst",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 230
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 234
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 234
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 233,
                "end": 234
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 231,
            "end": 236
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 240
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 231,
          "end": 240
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 242,
        "end": 245
      },
      "expression": false,
      "start": 218,
      "end": 245
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 245
}
```
