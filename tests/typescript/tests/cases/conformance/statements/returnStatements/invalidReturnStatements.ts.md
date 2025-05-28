__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 37,
  "end": 418,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 51,
        "end": 59,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 53,
          "end": 59
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 64,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 65,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 77,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 87,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 81,
          "end": 87
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 88,
        "end": 91,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 92,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 104,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 106,
        "end": 115,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 108,
          "end": 115
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 116,
        "end": 119,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 120,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 132,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 134,
        "end": 140,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 136,
          "end": 140,
          "typeName": {
            "type": "Identifier",
            "start": 136,
            "end": 140,
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 141,
        "end": 145,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 146,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 158,
        "decorators": [],
        "name": "fn7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 160,
        "end": 165,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 162,
          "end": 165
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 170,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 210,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 220,
        "end": 221,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 222,
        "end": 236,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 224,
            "end": 234,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 226,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 226,
              "end": 234,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 228,
                "end": 234
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 237,
      "end": 294,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 244,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 256,
          "end": 257,
          "expression": {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 258,
        "end": 294,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 264,
            "end": 275,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 264,
              "end": 266,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 274,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 268,
                "end": 274
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 280,
            "end": 292,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 280,
              "end": 287,
              "decorators": [],
              "name": "dispose",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 287,
              "end": 292,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 290,
                "end": 292,
                "body": []
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
      "type": "ClassDeclaration",
      "start": 295,
      "end": 334,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 302,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 311,
        "end": 312,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 313,
        "end": 334,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 319,
            "end": 332,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 319,
              "end": 323,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 323,
              "end": 331,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 325,
                "end": 331
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 335,
      "end": 376,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 348,
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 350,
        "end": 353,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 352,
          "end": 353,
          "typeName": {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 354,
        "end": 376,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 356,
            "end": 374,
            "argument": {
              "type": "ObjectExpression",
              "start": 363,
              "end": 373,
              "properties": [
                {
                  "type": "Property",
                  "start": 365,
                  "end": 371,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 367,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 369,
                    "end": 371,
                    "value": 12,
                    "raw": "12"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 379,
      "end": 417,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 392,
        "decorators": [],
        "name": "fn11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 394,
        "end": 397,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 396,
          "end": 397,
          "typeName": {
            "type": "Identifier",
            "start": 396,
            "end": 397,
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 398,
        "end": 417,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 400,
            "end": 415,
            "argument": {
              "type": "NewExpression",
              "start": 407,
              "end": 414,
              "callee": {
                "type": "Identifier",
                "start": 411,
                "end": 412,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
