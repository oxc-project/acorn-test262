__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 12,
        "name": "React",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "Invalid1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "React",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 56,
                "end": 70,
                "name": "ComponentClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 104,
            "name": "X",
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
                  "name": "Invalid1",
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
      "kind": "const",
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
          "attributes": [],
          "name": {
            "type": "JSXIdentifier",
            "start": 112,
            "end": 113,
            "name": "X"
          },
          "selfClosing": true,
          "typeArguments": null
        },
        "closingElement": null,
        "children": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
