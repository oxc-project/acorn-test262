__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 9,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 9,
                "members": []
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
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 24,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 46,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 33,
            "end": 44,
            "expression": {
              "type": "AssignmentExpression",
              "start": 33,
              "end": 43,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 33,
                "end": 39,
                "object": {
                  "type": "ThisExpression",
                  "start": 33,
                  "end": 37
                },
                "property": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 42,
                "end": 43,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 48,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 56,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 65,
        "end": 74,
        "name": "undefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 78,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 87,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Literal",
        "start": 96,
        "end": 100,
        "value": true,
        "raw": "true"
      },
      "body": {
        "type": "ClassBody",
        "start": 101,
        "end": 104,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 105,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Literal",
        "start": 122,
        "end": 127,
        "value": false,
        "raw": "false"
      },
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 131,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 132,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 140,
        "name": "C4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Literal",
        "start": 149,
        "end": 151,
        "value": 42,
        "raw": "42"
      },
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 155,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 156,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 162,
        "end": 164,
        "name": "C5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Literal",
        "start": 173,
        "end": 180,
        "value": "hello",
        "raw": "\"hello\""
      },
      "body": {
        "type": "ClassBody",
        "start": 181,
        "end": 184,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 185,
      "end": 207,
      "id": {
        "type": "Identifier",
        "start": 191,
        "end": 193,
        "name": "C6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 202,
        "end": 203,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 204,
        "end": 207,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 208,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 216,
        "name": "C7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 225,
        "end": 228,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 229,
        "end": 232,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
