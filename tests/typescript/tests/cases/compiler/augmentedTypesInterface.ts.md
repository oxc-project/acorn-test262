__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 397,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 61,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 47,
            "end": 59,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 50,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 58,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 54,
                "end": 58
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
      "type": "TSInterfaceDeclaration",
      "start": 63,
      "end": 97,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 75,
        "end": 97,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 81,
            "end": 95,
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 84,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 86,
              "end": 94,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
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
      "type": "TSInterfaceDeclaration",
      "start": 123,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 135,
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 136,
        "end": 156,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 142,
            "end": 154,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 145,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 153,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 149,
                "end": 153
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
      "start": 158,
      "end": 206,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 166,
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 204,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 176,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 204,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 179,
                "end": 204,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 189,
                    "end": 198,
                    "argument": {
                      "type": "Literal",
                      "start": 196,
                      "end": 197,
                      "value": 1,
                      "raw": "1"
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
      "type": "TSInterfaceDeclaration",
      "start": 231,
      "end": 273,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 243,
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 244,
        "end": 273,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 259,
            "end": 271,
            "key": {
              "type": "Identifier",
              "start": 259,
              "end": 262,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 270,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 266,
                "end": 270
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
      "type": "TSEnumDeclaration",
      "start": 274,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 281,
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 282,
        "end": 289,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 284,
            "end": 287,
            "id": {
              "type": "Identifier",
              "start": 284,
              "end": 287,
              "decorators": [],
              "name": "One",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 289,
      "end": 290
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 326,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 338,
        "decorators": [],
        "name": "i4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 339,
        "end": 359,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 345,
            "end": 357,
            "key": {
              "type": "Identifier",
              "start": 345,
              "end": 348,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 356,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 352,
                "end": 356
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
