__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box2D",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 23
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Collision",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 33
          },
          "start": 18,
          "end": 33
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Shapes",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 40
        },
        "start": 18,
        "end": 40
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2CircleShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 73
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 89
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 90,
                "end": 97
              },
              "abstract": false,
              "declare": false,
              "start": 54,
              "end": 97
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 47,
            "end": 97
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 115,
                "end": 122
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box2D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 136
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collision",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 137,
                      "end": 146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 131,
                    "end": 146
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Shapes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 153
                  },
                  "optional": false,
                  "computed": false,
                  "start": 131,
                  "end": 153
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2CircleShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 167
                },
                "optional": false,
                "computed": false,
                "start": 131,
                "end": 167
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 168,
                "end": 175
              },
              "abstract": false,
              "declare": false,
              "start": 109,
              "end": 175
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 102,
            "end": 175
          }
        ],
        "start": 41,
        "end": 177
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 177
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Box2D",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 201
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Dynamics",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 210
        },
        "start": 196,
        "end": 210
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2ContactListener",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 247
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box2D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 256,
                      "end": 261
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collision",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 271
                    },
                    "optional": false,
                    "computed": false,
                    "start": 256,
                    "end": 271
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Shapes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 278
                  },
                  "optional": false,
                  "computed": false,
                  "start": 256,
                  "end": 278
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 286
                },
                "optional": false,
                "computed": false,
                "start": 256,
                "end": 286
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 287,
                "end": 294
              },
              "abstract": false,
              "declare": false,
              "start": 224,
              "end": 294
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 217,
            "end": 294
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2FixtureDef",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 324
              },
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box2D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 338
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Dynamics",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 339,
                    "end": 347
                  },
                  "optional": false,
                  "computed": false,
                  "start": 333,
                  "end": 347
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2ContactListener",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 365
                },
                "optional": false,
                "computed": false,
                "start": 333,
                "end": 365
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 366,
                "end": 373
              },
              "abstract": false,
              "declare": false,
              "start": 306,
              "end": 373
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 299,
            "end": 373
          }
        ],
        "start": 211,
        "end": 375
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 178,
      "end": 375
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 375
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17,
    "range": [
      8,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "Box2D",
    "start": 18,
    "end": 23,
    "range": [
      18,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "Collision",
    "start": 24,
    "end": 33,
    "range": [
      24,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "Shapes",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53,
    "range": [
      47,
      53
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 54,
    "end": 59,
    "range": [
      54,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "b2CircleShape",
    "start": 60,
    "end": 73,
    "range": [
      60,
      73
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 74,
    "end": 81,
    "range": [
      74,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "b2Shape",
    "start": 82,
    "end": 89,
    "range": [
      82,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 102,
    "end": 108,
    "range": [
      102,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114,
    "range": [
      109,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "b2Shape",
    "start": 115,
    "end": 122,
    "range": [
      115,
      122
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 123,
    "end": 130,
    "range": [
      123,
      130
    ]
  },
  {
    "type": "Identifier",
    "value": "Box2D",
    "start": 131,
    "end": 136,
    "range": [
      131,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "Collision",
    "start": 137,
    "end": 146,
    "range": [
      137,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "Shapes",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Identifier",
    "value": "b2CircleShape",
    "start": 154,
    "end": 167,
    "range": [
      154,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 178,
    "end": 185,
    "range": [
      178,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 186,
    "end": 195,
    "range": [
      186,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "Box2D",
    "start": 196,
    "end": 201,
    "range": [
      196,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "Dynamics",
    "start": 202,
    "end": 210,
    "range": [
      202,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 217,
    "end": 223,
    "range": [
      217,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 224,
    "end": 229,
    "range": [
      224,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "b2ContactListener",
    "start": 230,
    "end": 247,
    "range": [
      230,
      247
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 248,
    "end": 255,
    "range": [
      248,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "Box2D",
    "start": 256,
    "end": 261,
    "range": [
      256,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "Collision",
    "start": 262,
    "end": 271,
    "range": [
      262,
      271
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "Shapes",
    "start": 272,
    "end": 278,
    "range": [
      272,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "b2Shape",
    "start": 279,
    "end": 286,
    "range": [
      279,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 299,
    "end": 305,
    "range": [
      299,
      305
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 306,
    "end": 311,
    "range": [
      306,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "b2FixtureDef",
    "start": 312,
    "end": 324,
    "range": [
      312,
      324
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 325,
    "end": 332,
    "range": [
      325,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "Box2D",
    "start": 333,
    "end": 338,
    "range": [
      333,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "Dynamics",
    "start": 339,
    "end": 347,
    "range": [
      339,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "b2ContactListener",
    "start": 348,
    "end": 365,
    "range": [
      348,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  }
]
```
