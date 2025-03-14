fillInMissingTypeArgsOnConstructCalls.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 44,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 44,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 42,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 37,
              "decorators": [],
              "name": "list",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 40,
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 40,
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
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 25,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 24,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 18,
              "end": 24,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 24,
                "decorators": [],
                "name": "Object",
                "optional": false
              }
            },
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
      "start": 45,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 53,
            "end": 60,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "A",
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
