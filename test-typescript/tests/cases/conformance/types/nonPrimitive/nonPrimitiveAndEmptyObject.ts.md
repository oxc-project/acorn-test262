__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 219,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 73,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 29,
        "end": 73,
        "body": {
          "type": "TSInterfaceBody",
          "start": 48,
          "end": 73,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 54,
              "end": 71,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 61,
                "decorators": [],
                "name": "barProp",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 70,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 64,
                  "end": 70
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 47,
          "decorators": [],
          "name": "BarProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 75,
      "end": 138,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 82,
        "end": 138,
        "body": {
          "type": "TSInterfaceBody",
          "start": 101,
          "end": 138,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 107,
              "end": 136,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 107,
                "end": 115,
                "decorators": [],
                "name": "fooProps",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 116,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 118,
                  "end": 135,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 118,
                      "end": 126,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 126,
                        "decorators": [],
                        "name": "BarProps",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 129,
                      "end": 135
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 92,
          "end": 100,
          "decorators": [],
          "name": "FooProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 167,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 167,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 167,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 167,
                  "decorators": [],
                  "name": "FooProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 198,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 175,
            "end": 192,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 177,
                "end": 190,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 185,
                  "decorators": [],
                  "name": "fooProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 177,
                  "end": 190,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 185,
                    "decorators": [],
                    "name": "fooProps",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ObjectExpression",
                    "start": 188,
                    "end": 190,
                    "properties": []
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 195,
            "end": 198,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 218,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 201,
        "end": 217,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 201,
          "end": 209,
          "decorators": [],
          "name": "fooProps",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 210,
          "end": 217,
          "decorators": [],
          "name": "barProp",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
