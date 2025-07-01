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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_path",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 80
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "./other",
              "raw": "'./other'",
              "start": 83,
              "end": 92
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 67,
            "end": 93
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dynamic",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 103
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
                      "type": "ImportExpression",
                      "source": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_path",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 134
                        },
                        "optional": false,
                        "computed": false,
                        "start": 124,
                        "end": 134
                      },
                      "options": null,
                      "phase": null,
                      "start": 117,
                      "end": 135
                    },
                    "start": 110,
                    "end": 136
                  }
                ],
                "start": 106,
                "end": 139
              },
              "expression": false,
              "start": 103,
              "end": 139
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 96,
            "end": 139
          }
        ],
        "start": 64,
        "end": 141
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 141
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "typeArguments": null,
            "arguments": [],
            "start": 153,
            "end": 160
          },
          "definite": false,
          "start": 149,
          "end": 160
        }
      ],
      "declare": false,
      "start": 143,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "dynamic",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 171
          },
          "optional": false,
          "computed": false,
          "start": 162,
          "end": 171
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 162,
        "end": 173
      },
      "directive": null,
      "start": 162,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 174
}
```
