__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyStringIterator",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 22
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 36
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 45
              },
              "optional": false,
              "computed": false,
              "start": 30,
              "end": 45
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 66,
                      "end": 70
                    },
                    "start": 59,
                    "end": 71
                  }
                ],
                "start": 49,
                "end": 77
              },
              "expression": false,
              "start": 46,
              "end": 77
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 77
          }
        ],
        "start": 23,
        "end": 79
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
            },
            "start": 85,
            "end": 94
          },
          "init": null,
          "definite": false,
          "start": 85,
          "end": 94
        }
      ],
      "declare": false,
      "start": 81,
      "end": 95
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 102
      },
      "right": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 126
        },
        "typeArguments": null,
        "arguments": [],
        "start": 106,
        "end": 126
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 128,
        "end": 131
      },
      "start": 96,
      "end": 131
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 154
      },
      "right": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyStringIterator",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 178
        },
        "typeArguments": null,
        "arguments": [],
        "start": 158,
        "end": 178
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 180,
        "end": 183
      },
      "start": 148,
      "end": 183
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 271
}
```
