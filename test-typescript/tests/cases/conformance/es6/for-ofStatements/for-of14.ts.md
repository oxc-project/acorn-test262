__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 184,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 38,
        "name": "MyStringIterator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 39,
        "end": 80,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 78,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "name": "next",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 78,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 78,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 72,
                    "argument": {
                      "type": "Literal",
                      "start": 69,
                      "end": 71,
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 96,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 95,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 95,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 97,
      "end": 132,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "NewExpression",
        "start": 107,
        "end": 127,
        "callee": {
          "type": "Identifier",
          "start": 111,
          "end": 127,
          "name": "MyStringIterator",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 132,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
