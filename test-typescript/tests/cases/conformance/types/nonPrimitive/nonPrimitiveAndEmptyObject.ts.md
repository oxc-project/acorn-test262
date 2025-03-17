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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 29,
        "end": 73,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 47,
          "name": "BarProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "barProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "name": "FooProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                "name": "fooProps",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "BarProps",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "attributes": [],
      "exportKind": "type"
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
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 167,
            "name": "foo",
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
                  "name": "FooProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "ObjectPattern",
            "start": 175,
            "end": 192,
            "properties": [
              {
                "type": "Property",
                "start": 177,
                "end": 190,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 185,
                  "name": "fooProps",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 177,
                  "end": 190,
                  "left": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 185,
                    "name": "fooProps",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 188,
                    "end": 190,
                    "properties": []
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 195,
            "end": 198,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
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
          "name": "fooProps",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 210,
          "end": 217,
          "name": "barProp",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
