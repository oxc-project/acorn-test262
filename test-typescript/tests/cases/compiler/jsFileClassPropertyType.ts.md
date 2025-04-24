__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 52,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 50,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 23,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 50,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 50,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 35,
                    "end": 46,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 35,
                      "end": 45,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 35,
                        "end": 41,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 35,
                          "end": 39
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 41,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 44,
                        "end": 45,
                        "raw": "0",
                        "value": 0
                      }
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 23,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 23,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 22,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 11,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 1,
            "end": 8,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 5,
              "end": 6,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 10,
            "end": 11,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 14,
          "end": 22,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
