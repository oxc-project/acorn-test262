accessInstanceMemberFromStaticMethod01.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 75,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 75,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 33,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 26,
                "end": 32
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 73,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 42,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 73,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 73,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 55,
                    "end": 67,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 59,
                        "end": 66,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 59,
                          "end": 60,
                          "decorators": [],
                          "name": "k",
                          "optional": false
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 66,
                          "decorators": [],
                          "name": "foo",
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
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
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
