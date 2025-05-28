__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 83,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 83,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 81,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 25,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 81,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 28,
                "end": 81,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 65,
                    "end": 77,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 65,
                      "end": 76,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 65,
                        "end": 71,
                        "object": {
                          "type": "ThisExpression",
                          "start": 65,
                          "end": 69
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "start": 74,
                        "end": 76,
                        "elements": []
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
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
  "end": 27,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 27,
      "expression": {
        "type": "CallExpression",
        "start": 0,
        "end": 26,
        "callee": {
          "type": "MemberExpression",
          "start": 0,
          "end": 16,
          "object": {
            "type": "MemberExpression",
            "start": 0,
            "end": 11,
            "object": {
              "type": "NewExpression",
              "start": 1,
              "end": 8,
              "callee": {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 12,
            "end": 16,
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 17,
            "end": 25,
            "value": "string",
            "raw": "\"string\""
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
