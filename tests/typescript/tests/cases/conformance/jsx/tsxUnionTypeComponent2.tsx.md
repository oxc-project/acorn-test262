__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 119,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 15,
        "end": 31,
        "expression": {
          "type": "Literal",
          "start": 23,
          "end": 30,
          "value": "react",
          "raw": "'react'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 34,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 47,
        "decorators": [],
        "name": "Invalid1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 50,
        "end": 84,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 50,
            "end": 75,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 50,
              "end": 70,
              "left": {
                "type": "Identifier",
                "start": 50,
                "end": 55,
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 56,
                "end": 70,
                "decorators": [],
                "name": "ComponentClass",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 70,
              "end": 75,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 71,
                  "end": 74
                }
              ]
            }
          },
          {
            "type": "TSNumberKeyword",
            "start": 78,
            "end": 84
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 87,
      "end": 109,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 104,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 96,
                "end": 104,
                "typeName": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 104,
                  "decorators": [],
                  "name": "Invalid1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 107,
            "end": 108,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 117,
      "expression": {
        "type": "JSXElement",
        "start": 111,
        "end": 116,
        "openingElement": {
          "type": "JSXOpeningElement",
          "start": 111,
          "end": 116,
          "name": {
            "type": "JSXIdentifier",
            "start": 112,
            "end": 113,
            "name": "X"
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true
        },
        "children": [],
        "closingElement": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
