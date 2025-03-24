__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 502,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 31,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 48,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "name": "raw",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 53,
            "end": 63,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 62,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 58,
                "end": 62
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 295,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 102,
            "end": 124,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "name": "prop",
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
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 117,
                "end": 123
              }
            },
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 129,
            "end": 150,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 141,
              "name": "raw",
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
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            },
            "accessibility": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 155,
            "end": 184,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 175,
              "name": "ro",
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
            "readonly": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 183,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 177,
                "end": 183
              }
            },
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 189,
            "end": 225,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 214,
              "name": "readonlyProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 214,
              "end": 225,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 216,
                "end": 224,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 218,
                  "end": 224
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 230,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 255,
              "name": "readonlyProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 255,
              "end": 269,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 256,
                  "end": 267,
                  "name": "val",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 259,
                    "end": 267,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 261,
                      "end": 267
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 274,
            "end": 293,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 284,
              "end": 293,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 286,
                "end": 292,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 288,
                  "end": 292
                }
              }
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 94,
          "end": 95,
          "expression": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 296,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 303,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 312,
        "end": 313,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 314,
        "end": 502,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 348,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 328,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 348,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 348,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 333,
                    "end": 346,
                    "argument": {
                      "type": "Literal",
                      "start": 340,
                      "end": 345,
                      "value": "foo",
                      "raw": "\"foo\""
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
          },
          {
            "type": "MethodDefinition",
            "start": 353,
            "end": 368,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 357,
              "end": 361,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "set",
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 368,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 363,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 368,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 373,
            "end": 386,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 376,
              "name": "raw",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 379,
              "end": 385,
              "value": "edge",
              "raw": "\"edge\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 391,
            "end": 423,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 400,
              "end": 402,
              "name": "ro",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 405,
              "end": 422,
              "value": "readonly please",
              "raw": "\"readonly please\""
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 428,
            "end": 449,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 428,
              "end": 440,
              "name": "readonlyProp",
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
              "start": 440,
              "end": 448,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 442,
                "end": 448
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 493,
            "end": 500,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 493,
              "end": 494,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 494,
              "end": 500,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 497,
                "end": 500,
                "body": []
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
