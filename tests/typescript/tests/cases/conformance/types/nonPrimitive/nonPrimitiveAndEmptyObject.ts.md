__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 218,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 73,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 29,
        "end": 73,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 47,
          "decorators": [],
          "name": "BarProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 48,
          "end": 73,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 54,
              "end": 71,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 61,
                "decorators": [],
                "name": "barProp",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 62,
                "end": 70,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 64,
                  "end": 70
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 75,
      "end": 138,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 82,
        "end": 138,
        "id": {
          "type": "Identifier",
          "start": 92,
          "end": 100,
          "decorators": [],
          "name": "FooProps",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 101,
          "end": 138,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 107,
              "end": 136,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 107,
                "end": 115,
                "decorators": [],
                "name": "fooProps",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 126,
                        "decorators": [],
                        "name": "BarProps",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 129,
                      "end": 135
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 168,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 167,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 167,
                  "decorators": [],
                  "name": "FooProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 199,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 198,
          "id": {
            "type": "ObjectPattern",
            "start": 175,
            "end": 192,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 177,
                "end": 190,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 185,
                  "decorators": [],
                  "name": "fooProps",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "ObjectExpression",
                    "start": 188,
                    "end": 190,
                    "properties": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 218,
      "expression": {
        "type": "MemberExpression",
        "start": 201,
        "end": 217,
        "object": {
          "type": "Identifier",
          "start": 201,
          "end": 209,
          "decorators": [],
          "name": "fooProps",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 210,
          "end": 217,
          "decorators": [],
          "name": "barProp",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
