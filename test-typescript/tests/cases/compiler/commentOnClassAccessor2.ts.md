__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 112,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 112,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 37,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 44,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 67,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 55,
                "end": 67,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 57,
                    "end": 66,
                    "argument": {
                      "type": "Literal",
                      "start": 64,
                      "end": 65,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 46,
                "end": 54,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 48,
                  "end": 54
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 96,
            "end": 110,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 103,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 103,
              "end": 110,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 107,
                "end": 110,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 104,
                  "end": 105,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
