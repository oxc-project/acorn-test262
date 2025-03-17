__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 400,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 185,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 44,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              }
            },
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 105,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 68,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 105,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 79,
                "end": 105,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 89,
                    "end": 99,
                    "argument": {
                      "type": "Literal",
                      "start": 96,
                      "end": 98,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 70,
                "end": 78,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 72,
                  "end": 78
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 149,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 149,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 149,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 138,
                    "end": 147,
                    "argument": {
                      "type": "Literal",
                      "start": 145,
                      "end": 146,
                      "value": 1,
                      "raw": "1"
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
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 154,
            "end": 183,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 183,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 180,
                "end": 183,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
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
      "type": "ClassDeclaration",
      "start": 206,
      "end": 400,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 219,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 228,
        "end": 232,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 233,
        "end": 400,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 239,
            "end": 264,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 263,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 257,
                "end": 263
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 270,
            "end": 324,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 287,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 287,
              "end": 324,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 298,
                "end": 324,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 308,
                    "end": 318,
                    "argument": {
                      "type": "Literal",
                      "start": 315,
                      "end": 317,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 289,
                "end": 297,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 291,
                  "end": 297
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 330,
            "end": 366,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 350,
              "end": 366,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 353,
                "end": 366,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 355,
                    "end": 364,
                    "argument": {
                      "type": "Literal",
                      "start": 362,
                      "end": 363,
                      "value": 1,
                      "raw": "1"
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 398,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 391,
              "end": 398,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 392,
                  "end": 393,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 395,
                "end": 398,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
