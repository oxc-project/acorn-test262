__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 369,
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
            "decorators": [],
            "name": "Box2D",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 21,
            "end": 30,
            "decorators": [],
            "name": "Collision",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 31,
          "end": 37,
          "decorators": [],
          "name": "Shapes",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 70,
                "decorators": [],
                "name": "b2CircleShape",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 79,
                "end": 86,
                "decorators": [],
                "name": "b2Shape",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 87,
                "end": 94,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 172,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 106,
              "end": 172,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 112,
                "end": 119,
                "decorators": [],
                "name": "b2Shape",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
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
                      "decorators": [],
                      "name": "Box2D",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 143,
                      "decorators": [],
                      "name": "Collision",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 150,
                    "decorators": [],
                    "name": "Shapes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 164,
                  "decorators": [],
                  "name": "b2CircleShape",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 165,
                "end": 172,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
          "decorators": [],
          "name": "Box2D",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 196,
          "end": 204,
          "decorators": [],
          "name": "Dynamics",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 224,
                "end": 241,
                "decorators": [],
                "name": "b2ContactListener",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
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
                      "decorators": [],
                      "name": "Box2D",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 256,
                      "end": 265,
                      "decorators": [],
                      "name": "Collision",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 272,
                    "decorators": [],
                    "name": "Shapes",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 280,
                  "decorators": [],
                  "name": "b2Shape",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 281,
                "end": 288,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 293,
            "end": 367,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 300,
              "end": 367,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 306,
                "end": 318,
                "decorators": [],
                "name": "b2FixtureDef",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
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
                    "decorators": [],
                    "name": "Box2D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 341,
                    "decorators": [],
                    "name": "Dynamics",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 359,
                  "decorators": [],
                  "name": "b2ContactListener",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 360,
                "end": 367,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
