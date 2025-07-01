__ESTREE_TEST__:PASS:
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
            "start": 15,
            "end": 20
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Collision",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 30
          },
          "start": 15,
          "end": 30
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Shapes",
          "optional": false,
          "typeAnnotation": null,
          "start": 31,
          "end": 37
        },
        "start": 15,
        "end": 37
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
                "start": 57,
                "end": 70
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 86
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 87,
                "end": 94
              },
              "abstract": false,
              "declare": false,
              "start": 51,
              "end": 94
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 44,
            "end": 94
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
                "start": 112,
                "end": 119
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
                      "start": 128,
                      "end": 133
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collision",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 143
                    },
                    "optional": false,
                    "computed": false,
                    "start": 128,
                    "end": 143
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Shapes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 150
                  },
                  "optional": false,
                  "computed": false,
                  "start": 128,
                  "end": 150
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2CircleShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 164
                },
                "optional": false,
                "computed": false,
                "start": 128,
                "end": 164
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 165,
                "end": 172
              },
              "abstract": false,
              "declare": false,
              "start": 106,
              "end": 172
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 99,
            "end": 172
          }
        ],
        "start": 38,
        "end": 174
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 174
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
          "start": 190,
          "end": 195
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Dynamics",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 204
        },
        "start": 190,
        "end": 204
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
                "start": 224,
                "end": 241
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
                      "start": 250,
                      "end": 255
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collision",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 256,
                      "end": 265
                    },
                    "optional": false,
                    "computed": false,
                    "start": 250,
                    "end": 265
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Shapes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 266,
                    "end": 272
                  },
                  "optional": false,
                  "computed": false,
                  "start": 250,
                  "end": 272
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 280
                },
                "optional": false,
                "computed": false,
                "start": 250,
                "end": 280
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 281,
                "end": 288
              },
              "abstract": false,
              "declare": false,
              "start": 218,
              "end": 288
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 211,
            "end": 288
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
                "start": 306,
                "end": 318
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
                    "start": 327,
                    "end": 332
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Dynamics",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 341
                  },
                  "optional": false,
                  "computed": false,
                  "start": 327,
                  "end": 341
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b2ContactListener",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 359
                },
                "optional": false,
                "computed": false,
                "start": 327,
                "end": 359
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 360,
                "end": 367
              },
              "abstract": false,
              "declare": false,
              "start": 300,
              "end": 367
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 293,
            "end": 367
          }
        ],
        "start": 205,
        "end": 369
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 175,
      "end": 369
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 369
}
```
