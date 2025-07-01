__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BarProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 39,
          "end": 47
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "barProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 61
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 64,
                  "end": 70
                },
                "start": 62,
                "end": 70
              },
              "accessibility": null,
              "static": false,
              "start": 54,
              "end": 71
            }
          ],
          "start": 48,
          "end": 73
        },
        "declare": false,
        "start": 29,
        "end": 73
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 22,
      "end": 73
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 100
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 115
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BarProps",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 126
                      },
                      "typeArguments": null,
                      "start": 118,
                      "end": 126
                    },
                    {
                      "type": "TSObjectKeyword",
                      "start": 129,
                      "end": 135
                    }
                  ],
                  "start": 118,
                  "end": 135
                },
                "start": 116,
                "end": 135
              },
              "accessibility": null,
              "static": false,
              "start": 107,
              "end": 136
            }
          ],
          "start": 101,
          "end": 138
        },
        "declare": false,
        "start": 82,
        "end": 138
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 75,
      "end": 138
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FooProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 159,
                  "end": 167
                },
                "typeArguments": null,
                "start": 159,
                "end": 167
              },
              "start": 157,
              "end": 167
            },
            "start": 154,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 154,
          "end": 167
        }
      ],
      "declare": true,
      "start": 140,
      "end": 168
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fooProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 185
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fooProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 185
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 188,
                    "end": 190
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 190
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 177,
                "end": 190
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 192
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 198
          },
          "definite": false,
          "start": 175,
          "end": 198
        }
      ],
      "declare": false,
      "start": 169,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 209
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "barProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 217
        },
        "optional": false,
        "computed": false,
        "start": 201,
        "end": 217
      },
      "directive": null,
      "start": 201,
      "end": 218
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 218
}
```
