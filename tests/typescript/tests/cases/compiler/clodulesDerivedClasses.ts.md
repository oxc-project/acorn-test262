__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 249,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 31,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 18,
            "end": 29,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
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
      "type": "TSModuleDeclaration",
      "start": 33,
      "end": 108,
      "id": {
        "type": "TSQualifiedName",
        "start": 40,
        "end": 51,
        "left": {
          "type": "Identifier",
          "start": 40,
          "end": 45,
          "decorators": [],
          "name": "Shape",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 46,
          "end": 51,
          "decorators": [],
          "name": "Utils",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 52,
        "end": 108,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 58,
            "end": 106,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 65,
              "end": 106,
              "id": {
                "type": "Identifier",
                "start": 74,
                "end": 81,
                "decorators": [],
                "name": "convert",
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
                "start": 83,
                "end": 90,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 85,
                  "end": 90,
                  "typeName": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 90,
                    "decorators": [],
                    "name": "Shape",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 106,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 93,
                    "end": 105,
                    "argument": {
                      "type": "Literal",
                      "start": 100,
                      "end": 104,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 157,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 120,
        "decorators": [],
        "name": "Path",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 129,
        "end": 134,
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 135,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 141,
            "end": 154,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 145,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 153,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 147,
                "end": 153
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
      "type": "TSModuleDeclaration",
      "start": 159,
      "end": 246,
      "id": {
        "type": "TSQualifiedName",
        "start": 166,
        "end": 176,
        "left": {
          "type": "Identifier",
          "start": 166,
          "end": 170,
          "decorators": [],
          "name": "Path",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 171,
          "end": 176,
          "decorators": [],
          "name": "Utils",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 177,
        "end": 246,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 183,
            "end": 244,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 190,
              "end": 244,
              "id": {
                "type": "Identifier",
                "start": 199,
                "end": 207,
                "decorators": [],
                "name": "convert2",
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
                "start": 209,
                "end": 215,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 211,
                  "end": 215,
                  "typeName": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 215,
                    "decorators": [],
                    "name": "Path",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 216,
                "end": 244,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 226,
                    "end": 238,
                    "argument": {
                      "type": "Literal",
                      "start": 233,
                      "end": 237,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
