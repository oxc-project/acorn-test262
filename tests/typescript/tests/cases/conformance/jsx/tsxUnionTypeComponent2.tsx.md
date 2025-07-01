__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Invalid1",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 47
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "React",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 55
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 70
              },
              "start": 50,
              "end": 70
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 71,
                  "end": 74
                }
              ],
              "start": 70,
              "end": 75
            },
            "start": 50,
            "end": 75
          },
          {
            "type": "TSNumberKeyword",
            "start": 78,
            "end": 84
          }
        ],
        "start": 50,
        "end": 84
      },
      "declare": false,
      "start": 34,
      "end": 85
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
            "name": "X",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Invalid1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 104
                },
                "typeArguments": null,
                "start": 96,
                "end": 104
              },
              "start": 94,
              "end": 104
            },
            "start": 93,
            "end": 104
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 107,
            "end": 108
          },
          "definite": false,
          "start": 93,
          "end": 108
        }
      ],
      "declare": false,
      "start": 87,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "X",
            "start": 112,
            "end": 113
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 111,
          "end": 116
        },
        "children": [],
        "closingElement": null,
        "start": 111,
        "end": 116
      },
      "directive": null,
      "start": 111,
      "end": 117
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 119
}
```
