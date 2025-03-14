extendBaseClassBeforeItsDeclared.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 30,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 30,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 22,
        "end": 26,
        "decorators": [],
        "name": "base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 82,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 82,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 46,
            "end": 80,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 57,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 58,
              "end": 80,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 80,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 59,
                  "end": 75,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 66,
                    "end": 75,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 67,
                      "end": 75,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 69,
                        "end": 75
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
