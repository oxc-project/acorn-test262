__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 246,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 15,
            "name": "fInferred",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 18,
            "end": 39,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 19,
                "end": 33,
                "left": {
                  "type": "ObjectPattern",
                  "start": 19,
                  "end": 28,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 21,
                      "end": 26,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 21,
                        "end": 22,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 21,
                        "end": 26,
                        "left": {
                          "type": "Identifier",
                          "start": 21,
                          "end": 22,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 25,
                          "end": 26,
                          "value": 0,
                          "raw": "0"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 31,
                  "end": 33,
                  "properties": []
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 156,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 132,
            "name": "fAnnotated",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 132,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 116,
                "end": 132,
                "exprName": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 132,
                  "name": "fInferred",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 135,
            "end": 156,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 136,
                "end": 150,
                "left": {
                  "type": "ObjectPattern",
                  "start": 136,
                  "end": 145,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 138,
                      "end": 143,
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 139,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "AssignmentPattern",
                        "start": 138,
                        "end": 143,
                        "left": {
                          "type": "Identifier",
                          "start": 138,
                          "end": 139,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 142,
                          "end": 143,
                          "value": 0,
                          "raw": "0"
                        },
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 148,
                  "end": 150,
                  "properties": []
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 200,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 171,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 171,
            "end": 199,
            "name": "t",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 199,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 174,
                "end": 199,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 174,
                    "end": 187,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 176,
                        "end": 185,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 176,
                          "end": 177,
                          "name": "s",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 177,
                          "end": 185,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 179,
                            "end": 185
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 190,
                    "end": 199
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
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 217,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 216,
          "id": {
            "type": "ObjectPattern",
            "start": 207,
            "end": 212,
            "properties": [
              {
                "type": "Property",
                "start": 209,
                "end": 210,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 215,
            "end": 216,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 218,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 227,
        "end": 230,
        "name": "fst",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 231,
          "end": 240,
          "left": {
            "type": "ObjectPattern",
            "start": 231,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 233,
                "end": 234,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 234,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 234,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 242,
        "end": 245,
        "body": []
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
