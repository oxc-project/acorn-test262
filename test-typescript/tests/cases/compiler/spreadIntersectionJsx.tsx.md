__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 24,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 23,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 16,
            "name": "React",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 16,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 13,
                "end": 16
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 19,
            "end": 23,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 33,
        "end": 39,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 54,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 54,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 52,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 77,
            "name": "intersected",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 77,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 72,
                "end": 77,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 72,
                    "end": 73,
                    "typeName": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 77,
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 90,
            "name": "element",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 93,
            "end": 119,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 93,
              "end": 119,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "start": 98,
                  "end": 116,
                  "argument": {
                    "type": "Identifier",
                    "start": 103,
                    "end": 114,
                    "name": "intersected",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "name": {
                "type": "JSXIdentifier",
                "start": 94,
                "end": 97,
                "name": "div"
              },
              "selfClosing": true,
              "typeArguments": null
            },
            "closingElement": null,
            "children": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
