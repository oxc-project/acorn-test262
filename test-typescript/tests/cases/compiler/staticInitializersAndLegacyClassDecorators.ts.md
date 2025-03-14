staticInitializersAndLegacyClassDecorators.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 185,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 68,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 76,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 76,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 73,
                "end": 76
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 128,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 93,
        "end": 128,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 99,
            "end": 126,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 114,
              "decorators": [],
              "name": "instance",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "NewExpression",
              "start": 117,
              "end": 125,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 121,
                "end": 123,
                "decorators": [],
                "name": "C1",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 79,
          "end": 83,
          "expression": {
            "type": "Identifier",
            "start": 80,
            "end": 83,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 92,
        "decorators": [],
        "name": "C1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 184,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 144,
        "end": 184,
        "body": [
          {
            "type": "StaticBlock",
            "start": 150,
            "end": 182,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 167,
                "end": 176,
                "expression": {
                  "type": "NewExpression",
                  "start": 167,
                  "end": 175,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 173,
                    "decorators": [],
                    "name": "C2",
                    "optional": false
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 130,
          "end": 134,
          "expression": {
            "type": "Identifier",
            "start": 131,
            "end": 134,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 143,
        "decorators": [],
        "name": "C2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
