__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 370,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 174,
      "id": {
        "type": "TSQualifiedName",
        "start": 15,
        "end": 37,
        "left": {
          "type": "TSQualifiedName",
          "start": 15,
          "end": 30,
          "left": {
            "type": "Identifier",
            "start": 15,
            "end": 20,
            "name": "Box2D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Identifier",
            "start": 21,
            "end": 30,
            "name": "Collision",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 31,
          "end": 37,
          "name": "Shapes",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 38,
        "end": 174,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 44,
            "end": 94,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 51,
              "end": 94,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 70,
                "name": "b2CircleShape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "Identifier",
                "start": 79,
                "end": 86,
                "name": "b2Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 87,
                "end": 94,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 172,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 106,
              "end": 172,
              "id": {
                "type": "Identifier",
                "start": 112,
                "end": 119,
                "name": "b2Shape",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 128,
                "end": 164,
                "object": {
                  "type": "MemberExpression",
                  "start": 128,
                  "end": 150,
                  "object": {
                    "type": "MemberExpression",
                    "start": 128,
                    "end": 143,
                    "object": {
                      "type": "Identifier",
                      "start": 128,
                      "end": 133,
                      "name": "Box2D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 143,
                      "name": "Collision",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 150,
                    "name": "Shapes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 164,
                  "name": "b2CircleShape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 165,
                "end": 172,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 175,
      "end": 369,
      "id": {
        "type": "TSQualifiedName",
        "start": 190,
        "end": 204,
        "left": {
          "type": "Identifier",
          "start": 190,
          "end": 195,
          "name": "Box2D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 196,
          "end": 204,
          "name": "Dynamics",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 205,
        "end": 369,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 211,
            "end": 288,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 218,
              "end": 288,
              "id": {
                "type": "Identifier",
                "start": 224,
                "end": 241,
                "name": "b2ContactListener",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 250,
                "end": 280,
                "object": {
                  "type": "MemberExpression",
                  "start": 250,
                  "end": 272,
                  "object": {
                    "type": "MemberExpression",
                    "start": 250,
                    "end": 265,
                    "object": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 255,
                      "name": "Box2D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 265,
                      "name": "Collision",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 272,
                    "name": "Shapes",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 280,
                  "name": "b2Shape",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 281,
                "end": 288,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 293,
            "end": 367,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 300,
              "end": 367,
              "id": {
                "type": "Identifier",
                "start": 306,
                "end": 318,
                "name": "b2FixtureDef",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": {
                "type": "MemberExpression",
                "start": 327,
                "end": 359,
                "object": {
                  "type": "MemberExpression",
                  "start": 327,
                  "end": 341,
                  "object": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 332,
                    "name": "Box2D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 341,
                    "name": "Dynamics",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 359,
                  "name": "b2ContactListener",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 360,
                "end": 367,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
