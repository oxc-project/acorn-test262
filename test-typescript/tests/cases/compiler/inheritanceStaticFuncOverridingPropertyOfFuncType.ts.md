__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 39,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 39,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 37,
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
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 36,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 24,
                "end": 36,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 27,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 30,
                    "end": 36
                  }
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
        "name": "a",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 106,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 106,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 65,
            "end": 104,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
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
              "start": 73,
              "end": 104,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 76,
                "end": 104,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 86,
                    "end": 98,
                    "argument": {
                      "type": "Literal",
                      "start": 93,
                      "end": 97,
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
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 57,
        "end": 58,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
