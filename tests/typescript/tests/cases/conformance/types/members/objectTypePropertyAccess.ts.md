__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 95
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 107,
                "end": 113
              },
              "start": 105,
              "end": 113
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 102,
            "end": 114
          }
        ],
        "start": 96,
        "end": 116
      },
      "abstract": false,
      "declare": false,
      "start": 88,
      "end": 116
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 125,
                  "end": 126
                },
                "typeArguments": null,
                "start": 125,
                "end": 126
              },
              "start": 123,
              "end": 126
            },
            "start": 122,
            "end": 126
          },
          "init": null,
          "definite": false,
          "start": 122,
          "end": 126
        }
      ],
      "declare": false,
      "start": 118,
      "end": 127
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 138
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 147
              },
              "optional": false,
              "computed": false,
              "start": 137,
              "end": 147
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 137,
            "end": 149
          },
          "definite": false,
          "start": 132,
          "end": 149
        }
      ],
      "declare": false,
      "start": 128,
      "end": 150
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 157
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 161
              },
              "property": {
                "type": "Literal",
                "value": "toString",
                "raw": "'toString'",
                "start": 162,
                "end": 172
              },
              "optional": false,
              "computed": true,
              "start": 160,
              "end": 173
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 160,
            "end": 175
          },
          "definite": false,
          "start": 155,
          "end": 175
        }
      ],
      "declare": false,
      "start": 151,
      "end": 176
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 183
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 187
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 191
            },
            "optional": false,
            "computed": false,
            "start": 186,
            "end": 191
          },
          "definite": false,
          "start": 181,
          "end": 191
        }
      ],
      "declare": false,
      "start": 177,
      "end": 192
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 199
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 204,
              "end": 209
            },
            "optional": false,
            "computed": true,
            "start": 202,
            "end": 210
          },
          "definite": false,
          "start": 197,
          "end": 210
        }
      ],
      "declare": false,
      "start": 193,
      "end": 211
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 224
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 234
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
              },
              "start": 234,
              "end": 242
            },
            "accessibility": null,
            "static": false,
            "start": 231,
            "end": 243
          }
        ],
        "start": 225,
        "end": 245
      },
      "declare": false,
      "start": 213,
      "end": 245
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 254
                },
                "typeArguments": null,
                "start": 253,
                "end": 254
              },
              "start": 251,
              "end": 254
            },
            "start": 250,
            "end": 254
          },
          "init": null,
          "definite": false,
          "start": 250,
          "end": 254
        }
      ],
      "declare": false,
      "start": 246,
      "end": 255
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 262
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 266
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 275
              },
              "optional": false,
              "computed": false,
              "start": 265,
              "end": 275
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 265,
            "end": 277
          },
          "definite": false,
          "start": 260,
          "end": 277
        }
      ],
      "declare": false,
      "start": 256,
      "end": 278
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
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 285
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 289
              },
              "property": {
                "type": "Literal",
                "value": "toString",
                "raw": "'toString'",
                "start": 290,
                "end": 300
              },
              "optional": false,
              "computed": true,
              "start": 288,
              "end": 301
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 288,
            "end": 303
          },
          "definite": false,
          "start": 283,
          "end": 303
        }
      ],
      "declare": false,
      "start": 279,
      "end": 304
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 311
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 315
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 319
            },
            "optional": false,
            "computed": false,
            "start": 314,
            "end": 319
          },
          "definite": false,
          "start": 309,
          "end": 319
        }
      ],
      "declare": false,
      "start": 305,
      "end": 320
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
            "name": "r7",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 327
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 331
            },
            "property": {
              "type": "Literal",
              "value": "bar",
              "raw": "'bar'",
              "start": 332,
              "end": 337
            },
            "optional": false,
            "computed": true,
            "start": 330,
            "end": 338
          },
          "definite": false,
          "start": 325,
          "end": 338
        }
      ],
      "declare": false,
      "start": 321,
      "end": 339
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 345,
            "end": 346
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 355,
                  "end": 358
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 360,
                  "end": 362
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 355,
                "end": 362
              }
            ],
            "start": 349,
            "end": 364
          },
          "definite": false,
          "start": 345,
          "end": 364
        }
      ],
      "declare": false,
      "start": 341,
      "end": 364
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
            "name": "r8",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 372
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 376
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 385
              },
              "optional": false,
              "computed": false,
              "start": 375,
              "end": 385
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 375,
            "end": 387
          },
          "definite": false,
          "start": 370,
          "end": 387
        }
      ],
      "declare": false,
      "start": 366,
      "end": 388
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
            "name": "r9",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 395
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 399
              },
              "property": {
                "type": "Literal",
                "value": "toString",
                "raw": "'toString'",
                "start": 400,
                "end": 410
              },
              "optional": false,
              "computed": true,
              "start": 398,
              "end": 411
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 398,
            "end": 413
          },
          "definite": false,
          "start": 393,
          "end": 413
        }
      ],
      "declare": false,
      "start": 389,
      "end": 414
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
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 422
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 426
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 430
            },
            "optional": false,
            "computed": false,
            "start": 425,
            "end": 430
          },
          "definite": false,
          "start": 419,
          "end": 430
        }
      ],
      "declare": false,
      "start": 415,
      "end": 431
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 439
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 443
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 444,
              "end": 449
            },
            "optional": false,
            "computed": true,
            "start": 442,
            "end": 450
          },
          "definite": false,
          "start": 436,
          "end": 450
        }
      ],
      "declare": false,
      "start": 432,
      "end": 451
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 88,
  "end": 451
}
```
