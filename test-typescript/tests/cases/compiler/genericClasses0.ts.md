genericClasses0.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 24,
                "end": 25,
                "typeName": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 25,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 48,
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 48,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 48,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 40,
                  "end": 48,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 41,
                      "end": 47
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 59,
            "end": 63,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 59,
              "end": 61,
              "decorators": [],
              "name": "v1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
