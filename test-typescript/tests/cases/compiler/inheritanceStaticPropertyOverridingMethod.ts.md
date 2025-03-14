inheritanceStaticPropertyOverridingMethod.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 55,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 55,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 53,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 53,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 53,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 35,
                    "end": 47,
                    "argument": {
                      "type": "Literal",
                      "start": 42,
                      "end": 46,
                      "raw": "\"20\"",
                      "value": "20"
                    }
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
        "name": "a",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 100,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 100,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 81,
            "end": 98,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 97,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 91,
                "end": 97
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
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
