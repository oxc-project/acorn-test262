genericClasses1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
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
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 36,
            "decorators": [],
            "name": "v1",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 39,
            "end": 54,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 44,
              "end": 52,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 45,
                  "end": 51
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 61,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 61,
            "end": 62,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 65,
            "end": 69,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 65,
              "end": 67,
              "decorators": [],
              "name": "v1",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
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
