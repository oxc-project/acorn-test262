__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 60,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 22,
        "end": 60,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 28,
            "end": 58,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 55,
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 55,
              "end": 58,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
        "start": 15,
        "end": 21,
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 62,
      "end": 144,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 144,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 95,
            "end": 142,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 113,
              "end": 142,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 142,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 126,
                    "end": 136,
                    "argument": {
                      "type": "Literal",
                      "start": 133,
                      "end": 135,
                      "raw": "\"\"",
                      "value": "",
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
        "start": 68,
        "end": 73,
        "decorators": [],
        "name": "Child",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 82,
        "end": 88,
        "decorators": [],
        "name": "Parent",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
