__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 423,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 19,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 22,
          "end": 24,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 38,
      "expression": {
        "type": "AssignmentExpression",
        "start": 25,
        "end": 37,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 25,
          "end": 32,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 29,
            "end": 32,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 35,
          "end": 37,
          "value": 12,
          "raw": "12"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 65,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 64,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 53,
            "decorators": [],
            "name": "_private",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 56,
            "end": 64,
            "callee": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 87,
      "expression": {
        "type": "AssignmentExpression",
        "start": 66,
        "end": 86,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 66,
          "end": 79,
          "object": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 70,
            "end": 78,
            "decorators": [],
            "name": "_private",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 82,
          "end": 86,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 88,
      "end": 116,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 115,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 100,
            "decorators": [],
            "name": "strMem",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 103,
            "end": 115,
            "value": "strMemName",
            "raw": "\"strMemName\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 117,
      "end": 136,
      "expression": {
        "type": "AssignmentExpression",
        "start": 117,
        "end": 135,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 117,
          "end": 128,
          "object": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 121,
            "end": 127,
            "decorators": [],
            "name": "strMem",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 131,
          "end": 135,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 173,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 153,
            "decorators": [],
            "name": "dashStrMem",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 156,
            "end": 172,
            "value": "dashed-str-mem",
            "raw": "\"dashed-str-mem\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 197,
      "expression": {
        "type": "AssignmentExpression",
        "start": 174,
        "end": 196,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 174,
          "end": 189,
          "object": {
            "type": "Identifier",
            "start": 174,
            "end": 177,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 178,
            "end": 188,
            "decorators": [],
            "name": "dashStrMem",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 192,
          "end": 196,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 198,
      "end": 216,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 215,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 210,
            "decorators": [],
            "name": "numMem",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 213,
            "end": 215,
            "value": 42,
            "raw": "42"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 217,
      "end": 236,
      "expression": {
        "type": "AssignmentExpression",
        "start": 217,
        "end": 235,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 217,
          "end": 228,
          "object": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 221,
            "end": 227,
            "decorators": [],
            "name": "numMem",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 231,
          "end": 235,
          "value": "ok",
          "raw": "\"ok\""
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 284,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 283,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 267,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 270,
            "end": 283,
            "object": {
              "type": "Identifier",
              "start": 270,
              "end": 273,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 274,
              "end": 282,
              "decorators": [],
              "name": "_private",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 329,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 328,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 314,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 317,
            "end": 328,
            "object": {
              "type": "Identifier",
              "start": 317,
              "end": 320,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 321,
              "end": 327,
              "decorators": [],
              "name": "strMem",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 374,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 373,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 359,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 362,
            "end": 373,
            "object": {
              "type": "Identifier",
              "start": 362,
              "end": 365,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 366,
              "end": 372,
              "decorators": [],
              "name": "numMem",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 397,
      "end": 423,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 422,
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 404,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 407,
            "end": 422,
            "object": {
              "type": "Identifier",
              "start": 407,
              "end": 410,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 411,
              "end": 421,
              "decorators": [],
              "name": "dashStrMem",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
