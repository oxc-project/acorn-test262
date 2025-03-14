spreadIntersectionJsx.tsx
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 16,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 16,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 13,
                "end": 16
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 19,
            "end": 23,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 39,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 33,
        "end": 39,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 37,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 54,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 52,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 77,
            "decorators": [],
            "name": "intersected",
            "optional": false,
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
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 76,
                    "end": 77,
                    "typeName": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 77,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 90,
            "decorators": [],
            "name": "element",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 93,
            "end": 119,
            "children": [],
            "closingElement": null,
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
                    "decorators": [],
                    "name": "intersected",
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
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
