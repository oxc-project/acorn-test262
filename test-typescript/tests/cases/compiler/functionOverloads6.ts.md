functionOverloads6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 107,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 107,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 36,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 33,
              "decorators": [],
              "name": "fnOverload",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 33,
              "end": 36,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 40,
            "end": 70,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 57,
              "decorators": [],
              "name": "fnOverload",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 57,
              "end": 70,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 58,
                  "end": 68,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 68,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 62,
                      "end": 68
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 74,
            "end": 105,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 91,
              "decorators": [],
              "name": "fnOverload",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 105,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 102,
                "end": 105,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 92,
                  "end": 101,
                  "decorators": [],
                  "name": "foo",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 96,
                    "end": 101,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 98,
                      "end": 101
                    }
                  }
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
